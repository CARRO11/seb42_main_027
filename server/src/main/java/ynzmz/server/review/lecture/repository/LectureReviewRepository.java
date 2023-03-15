package ynzmz.server.review.lecture.repository;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import ynzmz.server.review.lecture.entity.LectureReview;

import java.util.List;

@Repository
public interface LectureReviewRepository extends JpaRepository<LectureReview,Long> {

    @Query("SELECT lr FROM LectureReview lr JOIN lr.lecture lrl WHERE lrl.lectureId = :lectureId")
    List<LectureReview> findAllLecturesByLectureReview(long lectureId);

    @Query("SELECT lr FROM LectureReview lr JOIN lr.lecture lrl JOIN lrl.teacher lrlt WHERE lrlt.teacherId = :teacherId")
    List<LectureReview> findAllLecturesByTeacherId(long teacherId);

//    @Query("SELECT lr FROM LectureReviewPost lr JOIN lr.lecture l where l.lectureId = :lectureId")
    Page<LectureReview> findLectureReviewByLectureLectureId(long lectureId, Pageable pageable);

    Page<LectureReview> findLectureReviewByLectureTeacherTeacherId(long teacherId, Pageable pageable);
}
