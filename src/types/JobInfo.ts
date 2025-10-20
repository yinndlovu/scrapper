export type JobInfo = {
  id: string;
  cover_page: {
    job_title: string;
    job_brief_info: string;
    job_posted_date: string;
  };
  nested_page?: {

    job_qualification: string;
    job_location: string;
    job_city: string;
    job_experince: string;
    job_additional_info: string;
  };
  job_apply_link?: string;
};
