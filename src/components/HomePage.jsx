import { Avatar, Box, Button, Card, CardContent, CardHeader, Grid, makeStyles, Typography } from '@material-ui/core'
import { Autorenew } from '@material-ui/icons';
import React, { useState } from 'react'
import { Fragment } from 'react'


const HomePage = () => {

  const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      '& > *': {
        margin: theme.spacing(1),
      },
    },
    small: {
      width: theme.spacing(3),
      height: theme.spacing(3),
    },
    large: {
      width: theme.spacing(10),
      height: theme.spacing(10),
    },
    homeTitle: {
      fontSize: 30,
      fontWeight: 'Bold',
      fontFamily: 'Roboto'
    },
    bandera: {
      width: theme.spacing(5),
      height: theme.spacing(5),
    },
    textoSecundario: {
      background: "#C0C0C0",
      padding: '1px',
      fontSize: 13,
      width: theme.spacing(50)
    }
  }));

  const [bCambiarIdioma, setbCambiarIdioma] = useState(true);

  const cambiarIdioma = () => {
    setbCambiarIdioma(!bCambiarIdioma);
  }

  const classes = useStyles();

  return (
    <Fragment>
      <Card className={classes.cardStyles}>
        <CardHeader
          avatar={<Avatar alt="React logo" className={classes.large} src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/1200px-React.svg.png" />}
          title={<Typography className={classes.homeTitle}>React Apirest</Typography>}
          className={classes.cardHeader}
        />
        <hr></hr>
        <CardContent>
          {
            (bCambiarIdioma) ?
            // Spanish part
              < Fragment >
                <Grid container spacing={2}>
                  <img className={classes.bandera} alt="Bandera España" src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxIPEBIQEBAQDw8QEBcRDxAPEBcQFRYQFxUYFhUXFRUYHSggGBolGxUVITIhJSkrLy4uGB8zODMsNygtLisBCgoKDg0OGxAQGy0lHyYtMC0tMC8tLy0tLS8rLS0tLTUtLy83LS0tMC8rLSstLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIAOEA4QMBIgACEQEDEQH/xAAcAAEAAgMBAQEAAAAAAAAAAAAABQYDBAcCAQj/xABJEAABAwICBAgICgoCAwEAAAABAAIDBBEFEhMhMUEGBxQXUWGT0yJTVHGBpLPRFSMyNDVVdJGhwTNCUmJygoOSseOywiRDcxb/xAAaAQEAAgMBAAAAAAAAAAAAAAAAAQMCBAUG/8QANREAAQMBBQUFCAIDAQAAAAAAAQACEQMEEiExURNBUpGhBRQVYXEyM0KBsdHh8CLxcrPBQ//aAAwDAQACEQMRAD8A7iiIiIiIiIiLRxDFqemGaonhgHTLI1n+SiZreRU6fjNwhhLTXNJH7EU0g+9rCCvHOnhHlvq9R3aiQrNlU4TyV0RUvnTwjy31eo7tOdPCPLfV6ju0kJsanCeSuiKl86eEeW+r1Hdpzp4R5b6vUd2khNjU4TyV0RUvnTwjy31eo7tOdPCPLfV6ju0kJsanCeSuiKl86eEeW+r1Hdpzp4R5b6vUd2khNjU4TyV0RUvnTwjy31eo7tOdPCPLfV6ju0kJsanCeSuiKl86eEeW+r1Hdpzp4R5b6vUd2khNjU4TyV0RUvnTwjy31eo7temcaGEO1CtH80M7R95jSQmxqcJ5K5Io3Dcdpar5vUwT9Iila4jzgG4UkpWBEZoiIihERERERERERERFH4zi0FFE6epkbFE3a5287gBtJ6gmN4rFRwSVM7skUTbuO89AA3knVZfmrhrwtmxWfSSXZCwnQQ31NHSelx6Vi50K+hQNQ+StXC7jdqKgujoQaeHZpHAaV3X0NXOqmaSZxfK98rztc9xcfvK8MYrDwf4I1dd83hJZvkf4DB/MfyVRMldmnQZTbOQVdEa9CNdXo+JmUi81bEx3RFG6UfeS1bXMuPrD1X/aoh2igWmzD4uh+y5Bo00S7DzMD6w9UHepzMD6w9UHepDtFn3qy8fQ/Zce0SaJdh5mR9Yeq/7U5mB9YeqDvUh2id6svH0P2XHtEmiXYuZkfWHqg71OZkfWHqg71Idop7zZePofsuO6JNEuxczQ8v8AVf8AanMyPrD1Qd6l12id5svH0P2XHdEmiXYuZkfWHqg71fOZgfWHqg71IdonebLx9D9lx7RJol2HmZH1h6r/ALU5mB9Yeqf7Uh2ijvNl4+h+y49o14Ma7FzMD6w9UHerDU8TMgb8XWxPduEkLox97XO/wkO0WJtNmPxdD9lySMuY4OY5zHjWHNJaR5iFeuCvGpWUZayoJq4NhDjaQD912/0qO4QcBa2hBdLFnjH/ALIjpG+nVcekKsPYkwVL6LKrZEEL9UcG+EdNiMWlppA8DU9p1PY7oc3cVML8m8G8enw2obPA6xGp7D8l7N7XBfpfglwjixKmbURG1/BkYdrJBtaVa10rj2izmmZ3KbREWa1kRERERFo4zXCmpp6h2yGF8p8zWk/kiLiXHZwnNRUihjd8TTnNJY/Kmtv8wP4rm7Gr1PUOmkfK83fI8vef3nG5UxwXwvlVVHEfkk5n/wAA1lUEr0FCmGN8grZxd8CBUWqqofEA/FRftnpd+7/ldgge1jQxjQ1rRYNaLABQ0MgY0NaLNaLNA3ALKKhZtgLQrF1Uy75BTHKU5SonlC+8oUysNipXlKcpUVyhOUKLybFSvKU5QorlCcoS8mxUryhOUKK5QnKEvJsVK8oTlCiuUJyhLybFSvKE5QorlCcoS8mxUrylOUqK5QnKEvJsVK8pTlKiuUL5yhTKbFSjpwQQbEHUQdYXMOMLgMwtdV0jcrhrlhaNRG9zOg9SvJqF5dUKDBWdK/Sdeb/a/OT2K28VXCY4fXNY53/j1JEcoOwO/Ud5wTb0rDw9wkU1U7ILMlGkYOg38IfeqrILbNRGwjpVYkLo1WNqMncf36r9hoq9wBxU1mG0s5+U6PK/d4bCWO/FpVhWwDIleecC0wURERQip/GzMWYNWEGxLWM9D5o2n8HFXBVjjI+i6j+l7aNYVHQwnQE8lkww4HzX5jhCvPFnGBLPJvbG1g8znEn/AIBZ6KMdA+5XLgq0DSah+ru/iXHHaQLw2718p0XYNpmmRHX8LaFR1r0J+tTUVugLO0DoCsPaIHw9fwqg8aKA0/Wmn61YwB0D7l9sOgLDxIcPX8LPaDTqq3p+tNP1qyWHQEsOgJ4kOHr+E2g06qt6frTT9aslh0BLDoCeJDh6/hNoNOqren600/WrJYdASw6AniQ4ev4TaDTqq3p+tNP1qyWHQEsOgJ4kOHr+E2g06qt6frTT9aslh0BLDoCeJDh6/hNoNOqren600/WrJYdASw6AniQ4ev4TaDTqq3p+tNP1qyWHQEsOgJ4kOHr+E2g06qtGfrXkz9asjgOgLDJboCzHaIPw9fwsS8adVy3jJYHQwv3tlLPQ5pP/AEC5xKF3zhK0GMah8ro6iqRXRDoH3Kp3aYD7t3r+Fa20xTiOv4Vz4iJi7C5ATcMrJGt6gWRv/wAuK6SqRxSj/wAKT7U72cau67FJ15gOoXHqGXk+aIiKxYIqxxj/AEXUf0vbRqzqscY/0ZUeeL20aqr+7d6H6KRmFyahCt3B02z/AMv5qpUCteBm2b0fmvIExUBXRb7KskTlstctGFy2WOWL6qsDVs5kzLDmWKeqaweEduwdKwa4uMDNZEAYlbeZMyjJMRyguLHgDXct1L6zSPGYuDARcAa/vVpaQJcQBz+ixkTAWZ1baUR3b5r67+/qW5mValjOnDi4F2cC/wCre2o+hShErRcOD99rf4KtrCm27Dsxv/pVsc4zI3qRzJmUZHiOYXDHkdTbrPBVNfex1jaN4VL2vbMjLPfCsBacluZkzLDmTMqtos7qzZkzLDmTMm0S6s2ZMyw5kzJtEurNmTMsOZMybRLqyFywSOXouWCVyybVxWJaorHjdg8/5FU6vCt+MG7B/F+RVSxBSXTUWBENV/4pvmUn2t3s41dlSeKf5nL9qd7ONXZexs/um+gXNd7RRERXLFFWOMj6MqP6Xt41Z1WOMf6MqP6Xt41VX9270P0UjMLlNBuVnwg2v6PzVYoNyseGHb6F4yqYcunTyVggctljloU7llnrGRC73tbqvrIBPmC03OJMBbDQt7MoDHMQ5O/SFocQLMBNtZ3qSocQjmaHMcDcXy3GYdRG5Y8TohMxwFmvLSGuIzAX6t6soVm06kVBhkd2/wDZQtmD81UH8JZ5DZ2UsJ1sAtq86xYrWzFxDnvybG2dduzZcaistZQPil1Bkb9QjyiwItY7V5ZSEPbHcgtBIicbAm2t2ywXfZVotuuYBETgJjXl+xGOTq9Jjw6AN0ef7ksscr+TmG3xh8IRkHMWftDqWrhtbO14DHvAvY3Pgjz31Be+T2eI/js+qz76xq2B9rAL1JSWfkJN3NAMQdfMBsJsPSoFcFrmuxnHL9w06lYCsxgcDH8tQcz69FkPCOeJ5a0tDQfkkXH3qcwfEjUyCTKGHLleAb317VAQUD3yNBDJHtIuHDVorb7K3YXQCFoBsXDe0WFtwstS2V6DBIAvEbvQgz++ik3HsDWjKMfRSeZMy1KisZGLve1uq+s67dQXmkr45QCx7XXFwL2NvNtXFl0TGCnCYW7mTMsd0uovqYWTMmZY7pdL6QsmZMyx3S6X0heyVglcvZKwSlZNfioLVGYofB9P5KsYgrJiJ1elVvEFtUzLlS/JX3in+Zy/anezjV2VJ4p/mcv2p3s41dl7az+5b6Bcp3tFERFcsUVZ4x/oyo88Xt41ZlWeMf6MqPPF7eNVV/du9D9FLcwuUUG5WGgKr1BuU9RleKtBxXUpZKcpyq9wrw50sgfCRpAA17ZHBrS21xa+/Wp2mcvtThzZ3tucpa067A7x0qmwmo60tbTzM55ZTjyVtYxTJVf4L4Y+KYPlIzZbMbG4EXI13Uzj3CBtGWAsL84J1G1rL3h+HiKVxuHWYQNQH6xH5Ks8Yx8OH+F3+VtPoufbxRr6bssiRCtsQFQDRfMT4UsnAtG9j23yvBYSLixtdVqpqpXH9NKbbMxF7ecWWWhpC5uk3hwsQ62/oWSvpCGueSS7SEXLgdQ6l1KQs9F9xo8tcfn9/krT3fbXCPKZ3zHp81k4P4VNWSOYycjK3MS57tl7blZ4OB1S0/OQPMXX+8hRvFwSZprbdEbee4spqrqJo43xSyTRyucbSgjLe1th2t2bF2GWem9mIWpar7K7qdOIwwgTiATmPNSODUOjc8aWOaYWa8k2cANxFutSZzAgO33Isb7PQqnRUzA572lxeITmka4i7nOaDmtq1i6tDYtG2Nl7lrTcnedS5XaPZdnZZ6lW7/ICQZP0yyVIdUZUFMuBxjLylVbhhhrppGuiPxgaA5sjw1pbrtbr2rDwXwp8UwkmPhWs1sbw4ZjtzdSstbhzZ3tucpAIvYHo6VhocPEMzteawLRqA3NK5bG2jw41ARcgjzzjlKyLgK93f0UrdLrzdLrgXlvQvV0uvN0ul5IXq6XXm6XS8kL0SteYrKSteYrJrsVBCj646lXMQVgqyq/iC6FnMlatRX3in+Zy/anezjV2VJ4p/mcv2p3s41dl7qz+5b6Bcl3tFERFcsUVZ4x/oyo88Xt41ZlWeMf6MqPPF7eNVVvdu/xP0UtzC5RQblP0igKDcp+kXibSupSyUnHIGtLnENaBck7AFGu4VAEPgj0rfCYHOdkBcNZsNp2LelphLG+N2x7S1QfA7AHxzyMqY8zQ3NGX+E3SXAJb12sruyKTX1rzXQ8ZToQQcN5W1UuCi4vxiMNcfvC+xcKJMwdo4bvaSBndcWJLgeggmyrfCPHjWFpMYjLARqOYG5Vrx3FmUc8cbYonskOV4IsWt0hF9XnUPw9pI4nxGNjWZmkuyC19eq66VRgZbxtGy4jB2WQ0HlA674V9gLC1pDYBmMfVQ+GPOrUC0O8LzW3LLiLzkdqAbdtunfdaseIkRiPUBawN7a+lYanEXGPRDf8AKubk7rHzreFMuaHBrb03YgyQTev3p9qRcGE3THmtV9CsLUapb/Gb3tCMMIjOIxyzU9xfYlDDO8yysjDmZQSbAuuNV1baujihaXSzOkzFzoWg7Qbffa+5c6bhYBa3SAlzblwOsalY+AtSyS8NQ5vxJDoXOdl1aw5l97dht1rpta1gADg6QDhOEl2oHCeXmtJ9qFoqvqtDmxEjCSBdEiDhm2QdcDmrBh7nEOiaGDSaiT4I1bx1ra4S4pyNkLiA8ufo7uNgPB2n7ljfBGKlsjZoNEAA5peLi1zq169dtq3q4QVDo2nRTZSXBtw+x2XstbtFzBZaheJEYhZNqtfaGOA9fXEfSPzmq2zhZKHC8UN8xYcsjja7c11li4S2e10sRAmBc0xHPZthrc3aNiyYPirJqySm0UDIomvDCALuNwFq8KMLfpWCkjs7O4PyamhuVtrjZbWVyKdnf3CHENYRi07pM+1unPpqtomn3kMc2Haz5H+laKaobKwPjcHMcLghZlo4NQingji3tb4RG9x1k/et5eOqBocQwyJMem7otkxOCIiLBERERF8K15lsFa8yybmoKjapV/EFYKpV/EF07PmtWqr7xT/M5ftTvZxq7Kk8U/zOX7U72cauy93Z/ct9AuQ72iiIiuWKKscY/wBGVH9L28as6rHGP9GVH9L28aqr+7d6H6KRmFymg3KfpFAUG5TtIvE2ldSkpVsmRjnWJygmw6lUjj1ZWvLaVhY22WzBc2vvedQ9Ct0IuLHYRY+ZeODOEikdIxriWPe57Gn9UHKLfgrOxjT7yGuH8icDoIM/P/k/PafUFOk5xaCd05Z6KAwXgkTLnq3Z3jwsgN9eYjwnb9YUhwqaMsmoaqbV/cp1n6V3mPtHKD4VfJl+zf8AZZdpk+Ihk4C7HzgnqsadZ9amHPO//qrbmjJQah8pu795aWM0Bklqnt1GEl5H7m/0i11vP+TQfxN/5LI/9JiH/wAnK5lR1N19uYB/2q3LEaH/AGKtx13xZblBcSDn1beo3W5hWH3bnkiMmd4aDfLluRcneL3/AMLblgboaMhozOmNy0DMfSpOEMzy/p/l/GB9sm0fhs69i6dt7UqVmFoES4kxOJBDZzwmMAIE4RiZps9kpWUl1IGcs5IAOQiN+skwBMLX+Docz2mAhjZAA8PvttYDffXay2OC0DWYjI0NLWiJ+UE31XbvXyrazKNctjIP0JGXSZte3rvtWTg4LYnLt/RO+V52rk1HONKoCSf4u3kjAjESVuNqOewkk5ZGdW6k466LdxvgjpZNJTO0criXFpNml3SCNhUOzFa2gfaZhkaDZ2e7tw2PHVbauiQ/LH835KHx3DOVh8ObIC8F3W0ZCR9y37I5ruyxUrYjEGZyvxuxwGS0+9nvApPALfMYjDcc1IYfViaJkoBaHtDrHaFsLFTwiNjWNFmsaGtHUBYLKvHOiTdyWwiIixRERERfCtaZbJWtMsm5qCo2qUBiCn6pQGILqWfNalVX3in+Zy/anezjV2VJ4p/mcv2p3s41dl7qz+5b6Bcl3tFERFcsUVY4x/oyo88Xto1Z1WOMf6MqPPF7aNVV/du9D9FIzC5TQblO0igKBT1IV4q0rqUlL0yjq7FRpCGTxsDPBNn2JcbHXqUhTFV84HUHMQR8p1hyhw1E3GoNsPMnZdKg6o51arsyIgyBnM9N/niptTqgYAxt6c/kt+gxNrZAXVDHB3guvLfXrI3dJ/FZOGEZ0DpACQI3NfYbjYg+YW/FRg4P1OTde1svKXf4y2t1K5AarHosVl2mLPQqsq0qu1ON7EHKIy1x5YJZDUIIe27kR+/ua5075FB/E3/ksj/0mIf/ACcrLW8GY3uY6N7otE7MxnymAg31DaB1XXlnB1gdK97pHOmHhZcobr6W7SOq6so1aNbC+G4fFh/6Xvp1WxUeWjInA5f5Xvoqi+BzqWOVpcHQaw2x1tvdzx5tS2NK6YB8JBbnaZYibOMlxmJG8bNXUrA+hqtI12aM5GOY12iIGVxbduUHflXifgnFJ4RvHMTdzoRo2HzMJNiutXbZYB2rBExiDMmTI+e7LcsKFsLjD2OGJM3QYk4jP5g7jJUPIXxvkfKWsgEl9ED4RcD4LgNxJsVvcB6Z8ks1W++V944i7eCbkjq1ALapeBcQdmmfJLrvlcbA/wAXSrLFGGgNaA1oFgALADqXn7XbKYpGnSN4kAExAgRgJxJJGJMSty8IgeW6OmPzJUHimJjSWZOxmQWNpLHOdoNh1LDRYk1sgc+oY4OOR15L6zbXs6lrTYHUEvIIsXOLRyhzbgm+wCw8yx//AJ+oybr5bZeUu6ejLa3Uuyyydn7IUu+Q3IiWxjifLPflK4jqlov3hSVyCLywWA8wXpeOXYREREREREXwrVmWy4rVnKzYsXKMqioLEFN1RUHXldSzjFalVX/in+Zy/anezjV2VJ4pvmUn2p3s41dl7mz+6b6Bcp3tFERFcsUVY4yPouo/pe2jVnVO42c3wNV5SQQIzcajYTxk/gCsKgvMI8ismCXAea5fQlTlIVyiGtk8ZJ2jvet2LEZfHSf3v9689V7Ke74hyXcpWUneF2GmK3oyuNR4pP46XtX+9Z24tUeOm7WT3rQf2FUPxjkV0GWFx+ILsoRcfGMT+Pn7Z/vX34Yn8on7Z/vVXgFXjHIq7w92oXX0XIPheo8on7V3vT4XqPHz9q73qPAKvGORU+HO4guvouQfC9R5RP2rvenwvUeUT9q73p4BV4xyKeHO4guvouQfC9R5RP2rvenwvUeUT9q73p4BV4xyKeHO4guvouQfC9R5RP2rvenwvUeUT9q73p4BV4xyKeHO4guvouQfC9R5RP2rvenwvUeUT9q73p4BV4xyKeHO4guvouQfC9R4+ftXe9Pheo8on7V3vTwCrxjkU8OdxBdfX1cf+GKjyiftn+9fDjE/j5+2f71PgFXjHIqPD3ahdceVpzuXLHYxP4+ftX+9YJMUn8dL2snvVjewqg+MciqnWFw+ILo1U5QdcVTJMSm8dJ/e/wB60pq6Txsnav8Aet2l2Q9vxDktCrZCN4X6C4pvmUn2p3s41d1zfiILjhsrnEnNWyEFxJ1aOIb+sFdIXo6TbrANAuFUbdeQiIisWCKN4RYfyqkqKfx0D4weguaQD99lJIikGDK/HpY5jnMcLPY4tcDucDYj7ws8ZVz44uDRo601DG/EVRzAjYJf1m/mqNG5a7gvRWasHAELdY5ZmuWqx6yteqiF1adQLZBWQFawevYcsIW216zXX26xByZlELO8FkReLr7mSFN4L0i8ZkzKIUyF7ReMyZkhJC9ovOZfLqYUXgsl18uvGZfC5IS8F7uvJK8lyxl6mFW569OcsL3I56xPeswFq1Ki8yOWtK5e5HKw8XfB12I18bLEwxESzu3BgOoekqwBcy0VQASV3bi1ws0mF0sThZ5YZXg7Q6RxeQfNmt6FaV5Y0AADUALAdS9LZAheac68STvRERFCIiIih+FOAxYjSyU0ux4ux42skHyXDrHvX5l4R4BPhtQ6nqG2I1sePkvZuc0r9ZKE4U8GafEodFUMvbXHI3U9julp/JYObK2bPaDTOOS/LTHrK16tPC3i3rKBxcxpqafaJYm+EB++zaD5lTg+2o6iNoKpLV26NoBEgrcD1kD1oiRehKsbq3G11uh6+51piVetKouqwWgLbzpnWnpU0qi6p7wFuZ0zrT0yaZLqnvAW5nTOtPTJpUup3gLczpnWnpU0qXVHeAtzOvJetXSr5plN1QbQFsl68l61zKvJkU3VW6usrnrE96xukVl4L8BK3EnDJGYYSfCnlBa0DqG1yyAWrVtAAklQmF4bLWTMp6dhklkNgBuG8k7gOlfpPgFwUZhVKIgQ+Z5z1En7T7bB+6NgTgZwKp8KjIiBkmePjZ3gZndQ/Zb1BWdXNbGK4dptJqYDL6oiIs1qoiIiIiIiIiIiIq7jPArD603npI3O/bZeJ/8AcwgqxIhE5qQ4gyFzabiYw5xJbJWRj9lkrCB/dGT+K8cylB4+u7WLul0xFF0aKzb1eIrmfMrh/lFf2kXdJzK4f5RX9pF3S6YiXRoneKvEVzTmVw/yiv7SLuk5lcP8or+0i7pdLRLo0U94q8R5rmnMrh/j67tIu6TmVw/x9d2kXdLpaJdGiberxFc05lcP8fXdpF3ScyuH+Pru0i7pdLRLo0Tb1eIrmnMrh/lFf2kXdJzK4f5RX9pF3S6WiXRoneKvEea5nzK4f5RX9pF3ScymH+Pru0i7pdMRLo0UberxFcz5lMP8fXdpF3S+s4lsPBuZa13UZY7fhGCulooujRNvV4iqvg/AHDaQh0VIwvGsPlLpnA9ReTb0KzNaALAAAbANS9IsgIVZcXYkyiIiKERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERF//2Q=="></img>
                  <Typography style={{ align: "center", fontSize: 25, fontWeight: 'Bold', }}>Español</Typography>
                  <Button onClick={() => cambiarIdioma()}><Autorenew /></Button>
                </Grid>
                <p>React Apirest es una aplicación de ReactJS para poder crear, listar, editar y eliminar clientes/usuarios.
                De forma adicional, la aplicación te permite enviar correos o mensajes vía WhatsApp a través de la información
            del cliente (email y teléfono).</p>
                <p>Para la creación de éste proyecto, he necesitado la ayuda de las siguientes dependencias npm:</p>
                <Box className={classes.textoSecundario}>
                  <p>"@material-ui/core": "^4.11.4",</p>
                  <p>"@material-ui/icons": "^4.11.2",</p>
                  <p>"@testing-library/jest-dom": "^5.12.0",</p>
                  <p>"@testing-library/react": "^11.2.6",</p>
                  <p>"@testing-library/user-event": "^12.8.3",</p>
                  <p>"firebase": "^8.6.1",</p>
                  <p>"material-ui-phone-number": "^2.2.6",</p>
                  <p>"random-material-color": "^1.0.5",</p>
                  <p>"react": "^17.0.2",</p>
                  <p>"react-dom": "^17.0.2",</p>
                  <p>"react-firestore": "^1.0.1",</p>
                  <p>"react-hook-form": "^7.5.3",</p>
                  <p>"react-router-dom": "^5.2.0",</p>
                  <p>"react-scripts": "4.0.3",</p>
                  <p>"uuid": "^8.3.2",</p>
                  <p>"web-vitals": "^1.1.2"</p>
                </Box>
                <p>Realizada por Óscar Caparrós de forma autodidacta para la formación, comprensión y aplicación de la tecnología ReactJS.</p>
                <p>El uso básico de la aplicación es el siguiente:</p>
                <ul>
                  <li>Acceder al listado de clientes, pulsar en "ADD CLIENT" para añadir un nuevo cliente, y rellenar los campos del formulario.</li>
                  <li>Una vez tengamos clientes creados, se listarán en "tarjetas" donde tendremos la opción de "Eliminar" o
                "Actualizar" el cliente. (Edit Client, Delete Client)</li>
                  <li>De forma adicional, y en el caso de que existan el correo y el teléfono del cliente, se podrán mandar e-mails
                y mensajes de WhatsApp.</li>
                </ul>
                <p>Aplicaciones y servicios usados:</p>
                <ul>
                  <li>VistualStudioCode</li>
                  <li>Firebase: Cloud Store</li>
                  <li>Node package manager (npm)</li>
                  <li>Git Bash</li>
                </ul>
                <p>Varios de los problemas conocidos en la aplicación, son derivados de la falta de tiempo a la hora
                de hacer el proyecto, igualmente serán corregidos cuando disponga del tiempo suficiente. Algunos de los problemas son los siguientes:
            </p>
                <ul>
                  <li>Al editar un cliente, se debe de pulsar dos veces en "Cancelar" para poder cerrar el formulario.</li>
                  <li>Al viajar entre las pestañas de la aplicación (Home, List, About) hay veces en los que el color "activo" de la pestaña no se muestra correctamente.</li>
                </ul>
                <p>Agradecimientos a la comunidad de StackOverflow y al canal de YouTube Bluuweb por el tutorial. <a
                  target="_blank" href="https://www.youtube.com/watch?v=Di4eAxkPNp0&list=PLPl81lqbj-4KswGEN6o4lF0cscQalpycD">Visita su tutorial aquí</a></p>

              </Fragment>
              :
              // English part
              < Fragment >
                <Grid container spacing={2}>
                  <img className={classes.bandera} alt="Bandera Inglesa" src="https://icons.iconarchive.com/icons/icons-land/vista-flags/256/English-Language-Flag-1-icon.png"></img>
                  <Typography style={{ align: "center", fontSize: 25, fontWeight: 'Bold', }}>English</Typography>
                  <Button onClick={() => cambiarIdioma()}><Autorenew /></Button>
                </Grid>
                <p>React Apirest is an ReactJS application that allows you to create, list, edit and delete clients / users.
                Additionally, the application allows you to send emails or messages via WhatsApp through the information
            of the client (email and telephone).</p>
                <p>Some dependencies needed for the proyect are these:</p>
                <Box className={classes.textoSecundario}>
                  <p>"@material-ui/core": "^4.11.4",</p>
                  <p>"@material-ui/icons": "^4.11.2",</p>
                  <p>"@testing-library/jest-dom": "^5.12.0",</p>
                  <p>"@testing-library/react": "^11.2.6",</p>
                  <p>"@testing-library/user-event": "^12.8.3",</p>
                  <p>"firebase": "^8.6.1",</p>
                  <p>"material-ui-phone-number": "^2.2.6",</p>
                  <p>"random-material-color": "^1.0.5",</p>
                  <p>"react": "^17.0.2",</p>
                  <p>"react-dom": "^17.0.2",</p>
                  <p>"react-firestore": "^1.0.1",</p>
                  <p>"react-hook-form": "^7.5.3",</p>
                  <p>"react-router-dom": "^5.2.0",</p>
                  <p>"react-scripts": "4.0.3",</p>
                  <p>"uuid": "^8.3.2",</p>
                  <p>"web-vitals": "^1.1.2"</p>
                </Box>
                <p>Created by Óscar Caparrós in a self-taught way for the training and understanding of ReactJS technology.</p>
                <p>The basic use of the application is as follows:</p>
                <ul>
                  <li>Access to the list of clients, click on "ADD CLIENT" to add a new client, and fill in the fields of the form.</li>
                  <li>Once we have created our clients, they will be listed in "cards" where we will have the option to "Delete" or
                "Update" the client.</li>
                  <li>Additionally, and in the event that the client's email and telephone number exist, e-mails and WhatsApp messages could be sent.</li>
                </ul>
                <p>Applications and used services:</p>
                <ul>
                  <li>VistualStudioCode</li>
                  <li>Firebase: Cloud Store</li>
                  <li>Node package manager (npm)</li>
                  <li>Git Bash</li>
                </ul>
                <p>Most of the knowledge problems in the application are derived from the lack of time and will be corrected when the necessary time.</p>
                <ul>
                  <li>When editing a customer, you must click twice on "Cancel" to be able to close the form.</li>
                  <li>Navigating betweens tabs, sometimes the "active" tab is not working correctly.</li>
                </ul>
                <p>Thanks to StackOverflow Community and to the YouTube Channel 'Bluuweb' for sharing his knowledge. <a
                  target="_blank" href="https://www.youtube.com/watch?v=Di4eAxkPNp0&list=PLPl81lqbj-4KswGEN6o4lF0cscQalpycD">Click to access to the tutorial</a></p>

              </Fragment>
          }
        </CardContent>
      </Card>
    </Fragment >
  )
}

export default HomePage
