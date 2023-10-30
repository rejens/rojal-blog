import { Schema, model, models } from "mongoose";

const BlogSchema = new Schema(
   {
      title: {
         type: String,
         required: [true, "Please provide a title"],
         trim: true,
         maxlength: [100, "Title cannot be more than 100 characters"],
      },
      description: {
         type: String,
         required: [true, "Please provide content"],
         trim: true,
      },
      user: {
         type: Schema.Types.ObjectId,
         ref: "User",
         required: true,
      },
   },
   { timestamps: true }
);

export default models.Blog || model("Blog", BlogSchema);
