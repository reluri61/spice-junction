import PageTitle from '../components/PageTitle'
import { menuCategories, menuGroups } from '../data'

function parseMenuItem(item) {
  const match = item.match(/^(.*?)\s*(?:—|-)?\s*(\$\d+(?:\.\d{2})?)$/)
  if (!match) return { name: item, price: '' }
  return { name: match[1].trim(), price: match[2] }
}

function getDisplayTitle(categoryKey, groupTitle) {
  if (categoryKey !== 'streetFood') return groupTitle
  if (groupTitle === 'Street Food Appetizers') return 'Street Style Appetizers'
  if (groupTitle === 'Rice') return 'Street Style Fried Rice'
  return `Street Style ${groupTitle}`
}

export default function MenuCategory({ categoryKey }) {
  const category = menuCategories[categoryKey]
  const groups = category.groupTitles
    .map((title) => menuGroups.find((group) => group.title === title))
    .filter(Boolean)

  return (
    <section className="content-section top-page-section menu-page-shell">
      <div className="container">
        <PageTitle
          eyebrow={category.eyebrow}
          title={category.title}
          action={<a className="text-link" href="#menu">Back to Menu</a>}
        />

        <div className="menu-groups-grid menu-fancy-grid">
          {groups.map((group, index) => (
            <article className={`menu-group-card menu-fancy-card fade-rise delay-${(index % 3) + 1}`} key={group.title}>
              <div className="menu-card-top">
                <h3>{getDisplayTitle(categoryKey, group.title)}</h3>
              </div>
              <ul>
                {group.items.map((item) => {
                  const { name, price } = parseMenuItem(item)
                  return (
                    <li className={`priced-menu-item ${price ? 'has-price' : 'no-price'}`} key={item}>
                      <span>{name}</span>
                      <strong>{price}</strong>
                    </li>
                  )
                })}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
