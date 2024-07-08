import { HeartHandshake } from "lucide-react";
import K from "../../../constants";
const Services = () => {
  return (
    <div className="grid grid-cols-4 gap-2">
      {
        K.SERVICES.map(
          (service, index) => {
            return (
              <div
                key={index}
                className={`p-4 flex flex-col`}
                style={{ backgroundColor: service.bgColor }}>

                <span
                  className="text-white w-fit p-2 rounded-full"
                  style={{ backgroundColor: service.bgColor }}>
                  {service.icon}
                </span>
                <h3
                  className="font-bold">
                  {service.title}
                </h3>
                <p
                  className="text-black">
                  {service.description}
                </p>
              </div>
            )
          }
        )
      }
    </div>
  )
}

export default Services
