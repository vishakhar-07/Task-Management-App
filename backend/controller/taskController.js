const Tasks = require("../model/tasks");

const homePage = (req, res) => {
  res.send("Hello Class Task Management App");
};

const createTask = async (req, res) => {
  const { title, description, priority, dueDate } = req.body;

  try {
    const record = new Tasks({
      title,
      description,
      priority,
      dueDate,
    });

    await record.save();
    res.status(201).json({
      success: true,
      message: "Task Created Successfully",
      record,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Something went wrong",
      error: error.message,
    });
  }
};

// show task

const showTask = async (req, res) => {
  try {
    const tasks = await Tasks.find().sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      tasks: tasks || [],
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to Fetch Tasks ",
      error: error.message,
    });
  }
};

// status change

const statusUpdate = async (req, res) => {
  try {
    const { status } = req.body;
    const id = req.params.id;
    const task = await Tasks.findByIdAndUpdate(id, { status }, { new: true });
    res.status(200).json({
      success: true,
      message: "Task status update successfully",
      task
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to Fetch Tasks status",
      error: error.message,
    });
  }
};

// deleter task 

const deleteTask = async(req,res)=>{
  try{
    const id = req.params.id
   await Tasks.findByIdAndDelete(id)
   res.status(200).json({
    message:"successfully deleted task ",
    success:true,
   })
  }
  catch(error){

    res.status(500).json({
      success:false,
      message:"Failed to delete task ",
      error:error.message,
    })

  }

}

//  single task 

const singleTask = async(req,res)=>{

  try{
    const task = await Tasks.findById(req.params.id)
    res.status(200).json({
      success:true,
      task 
    })
  }
  catch(error){
    res.status(500).json({
      success:false,
      message:"Failed to fetch task ",
      error:error.message,
    })
  }
}


// update task 

// Update Task Function (Ye add karna baaki hai)
const updateTask = async (req, res) => {
  try {
    const id = req.params.id;
    const { title, description, priority, dueDate } = req.body;

    const updatedTask = await Tasks.findByIdAndUpdate(
      id,
      { title, description, priority, dueDate },
      { new: true }
    );

    res.status(200).json({
      success: true,
      message: "Task Updated Successfully",
      task: updatedTask,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to update task",
      error: error.message,
    });
  }
};

module.exports = {
  homePage,
  createTask,
  showTask,
  statusUpdate,
  deleteTask,
  singleTask,
  updateTask
};
