import mongoose from "mongoose";
const { Schema } = mongoose;

const loanSchema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    amount: {
      type: Number,
      required: true,
      min: 100,
    },
    interestRate: {
      type: Number,
      required: true,
    },
    requestDate: {
      type: Date,
      required: true,
    },
    approvalDate: {
      type: Date,
      default: Date.now,
      required: true,

    },
    status: {
      type: String,
      enum: ["open", "sent_for_approval", "approved"],
      required: true,
    }
  },
  {
    timestamps: true,
  }
);

export const Loan = mongoose.model("Loan", loanSchema);