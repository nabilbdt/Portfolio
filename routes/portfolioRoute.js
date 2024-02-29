const router = require('express').Router();
const { Intro, About, Project, Contact, Experience, Course } = require('../models/portfolioModel');

// get all data
router.get('/get-portfolio-data', async (req, res) => {
    try {
        const intros = await Intro.find();
        const abouts = await About.find();
        const projects = await Project.find();
        const contacts = await Contact.find();
        const experiences = await Experience.find();
        const courses = await Course.find();

        res.status(200).send({
            intro: intros[0],
            about: abouts[0],
            projects: projects,
            contact: contacts[0],
            experiences: experiences,
            courses: courses,
        })
    } catch (error) {
        res.status(500).send(error);
    }
})
//update intro data
router.post('/update-intro', async (req, res) => {
    try {
        const intro = await Intro.findOneAndUpdate(
            { _id: req.body._id },
            req.body,
            { new: true }
        );
        res.status(200).send({
            data: intro,
            success: true,
            message: 'Intro Updated Successfully'
        });
    } catch (error) {
        res.status(500).send(error);
    }
});
//update about data
router.post('/update-about', async (req, res) => {
    try {
        const about = await About.findOneAndUpdate(
            { _id: req.body._id },
            req.body,
            { new: true }
        );
        res.status(200).send({
            data: about,
            success: true,
            message: 'About Updated Successfully'
        });
    } catch (error) {
        res.status(500).send(error);
    }
});

//add experience
router.post("/add-experience", async (req, res) => {
    try {
        const experience = new Experience(req.body);
        await experience.save();
        res.status(200).send({
            data: experience,
            success: true,
            message: "Experience Added Successfully"
        });
    } catch (error) {
        res.status(500).send(error);
    }
});

//update experience data
router.post('/update-experience', async (req, res) => {
    try {
        const experience = await Experience.findOneAndUpdate(
            { _id: req.body._id },
            req.body,
            { new: true }
        );
        res.status(200).send({
            data: experience,
            success: true,
            message: 'Experience Updated Successfully'
        });
    } catch (error) {
        res.status(500).send(error);
    }
});

//delete exprience
router.delete('/delete-experience',async (req, res) => {
    try {
        const experience = await Experience.findOneAndDelete({ _id: req.body._id});
        res.status(200).send({
            data: experience,
            success: true,
            message: 'Experience Deleted Successfully'
        })
    } catch (error) {
        res.status(500).send(error);
    }
})


//add project
router.post("/add-project", async (req, res) => {
    try {
        const project = new Project(req.body);
        await project.save();
        res.status(200).send({
            data: project,
            success: true,
            message: "Project Added Successfully"
        });
    } catch (error) {
        res.status(500).send(error);
    }
});
//update project data
router.post('/update-project', async (req, res) => {
    try {
        const project = await Project.findOneAndUpdate(
            { _id: req.body._id },
            req.body,
            { new: true }
        );
        res.status(200).send({
            data: project,
            success: true,
            message: 'Project Updated Successfully'
        });
    } catch (error) {
        res.status(500).send(error);
    }
});
//delete project
router.delete('/delete-project',async (req, res) => {
    try {
        const project = await Project.findOneAndDelete({ _id: req.body._id});
        res.status(200).send({
            data: project,
            success: true,
            message: 'project Deleted Successfully'
        })
    } catch (error) {
        res.status(500).send(error);
    }
})

//add Course
router.post("/add-course", async (req, res) => {
    try {
        const course = new Course(req.body);
        await course.save();
        res.status(200).send({
            data: course,
            success: true,
            message: "Course Added Successfully"
        });
    } catch (error) {
        res.status(500).send(error);
    }
});

//update Course data
router.post('/update-course', async (req, res) => {
    try {
        const course = await Course.findOneAndUpdate(
            { _id: req.body._id },
            req.body,
            { new: true }
        );
        res.status(200).send({
            data: course,
            success: true,
            message: 'Course Updated Successfully'
        });
    } catch (error) {
        res.status(500).send(error);
    }
});
//delete project
router.delete('/delete-course',async (req, res) => {
    try {
        const course = await Course.findOneAndDelete({ _id: req.body._id});
        res.status(200).send({
            data: course,
            success: true,
            message: 'Course Deleted Successfully'
        })
    } catch (error) {
        res.status(500).send(error);
    }
})




module.exports = router;