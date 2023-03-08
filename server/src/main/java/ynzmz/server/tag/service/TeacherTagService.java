package ynzmz.server.tag.service;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import ynzmz.server.tag.Tag;
import ynzmz.server.tag.TeacherTag;
import ynzmz.server.tag.repository.TagRepository;
import ynzmz.server.tag.repository.TeacherTagRepository;
import ynzmz.server.teacher.entity.Teacher;

import java.util.List;

@Service
@RequiredArgsConstructor
public class TeacherTagService {
    private final TeacherTagRepository teacherTagRepository;
    private final TagRepository tagRepository;
    public void createTeacherTag(Teacher teacher,List<Tag.Type> types){
        for(Tag.Type type : types){
            Tag findType = tagRepository.findTagByType(type);
            TeacherTag teacherTag = TeacherTag.builder()
                    .teacher(teacher)
                    .tag(findType)
                    .build();
            teacherTagRepository.save(teacherTag);
        }
    }
}
