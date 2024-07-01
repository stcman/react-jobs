import { Link } from "react-router-dom";

const Card = ({ title, subtitle, buttonTxt}) => {
  let colorTheme = title === 'Employers' ? 'indigo' : 'black';
  let colorBtnTheme = title === 'Employers' ? 'indigo-500' : 'black';
  let path = title === 'Employers' ? 'jobs' : 'add-job';
  return (
    <div className={`bg-${colorTheme}-100 p-6 rounded-lg shadow-md`}>
      <h2 className="text-2xl font-bold">For {title}</h2>
      <p className="mt-2 mb-4">
        {subtitle}
      </p>
      <Link
        to={path}
        className={`inline-block bg-${colorBtnTheme} text-white rounded-lg px-4 py-2 hover:bg-gray-700`}
      >
        {buttonTxt}
      </Link>
  </div>
  )
}

export default Card