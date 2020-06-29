import React, { Component } from 'react';

export class Card extends Component {
  render() {
    const {ctAllIcons, ctTableFullWidth, ctTableResponsive, ctTableUpgrade} = this.props;
    const clsContent = 'content' +
      (ctAllIcons ? ' all-icons' : '') +
      (ctTableFullWidth ? ' table-full-width' : '') +
      (ctTableResponsive ? ' table-responsive' : '') +
      (ctTableUpgrade ? ' table-upgrade' : '');
    return (
      <div className={'card' + (this.props.plain ? ' card-plain' : '')}>
        <div className={'header' + (this.props.hCenter ? ' text-center' : '')}>
          <h4 className='title'>{this.props.title}</h4>
          <p className='category'>{this.props.category}</p>
        </div>
        <div className={clsContent}>
          {this.props.content}
          <div className='footer'>
            {this.props.legend}
            {this.props.stats != null ? <hr /> : ''}
            <div className='stats'>
              <i className={this.props.statsIcon} /> {this.props.stats}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
