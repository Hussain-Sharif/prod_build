import React from 'react'


type Props ={
    title: string;
    description?: string;
    icon: React.ElementType;
}

const SectionHeader = ({ title, description, icon: Icon }: Props) => {
  return (
    <div>
      <div className="flex items-center gap-3 mb-4">
        <Icon className="size-6 text-primary" />
        <h2 className="text-2xl font-bold">{title}</h2>
      </div>
      {description && (
        <p className="text-muted-foreground">{description}</p>
      )}
    </div>
  )
}

export default SectionHeader
