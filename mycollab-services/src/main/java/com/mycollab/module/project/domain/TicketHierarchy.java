/*Domain class of table m_prj_ticket_hierarchy*/
package com.mycollab.module.project.domain;

import com.mycollab.core.arguments.ValuedBean;
import com.mycollab.db.metadata.Column;
import com.mycollab.db.metadata.Table;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;
import org.apache.commons.lang3.builder.EqualsBuilder;
import org.apache.commons.lang3.builder.HashCodeBuilder;
import org.apache.ibatis.type.Alias;
import org.hibernate.validator.constraints.Length;

@SuppressWarnings("ucd")
@Table("m_prj_ticket_hierarchy")
@Alias("TicketHierarchy")
public class TicketHierarchy extends ValuedBean {
    /**
     *
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column m_prj_ticket_hierarchy.id
     *
     * @mbg.generated Sat Apr 20 17:20:23 CDT 2019
     */
    @Column("id")
    private Integer id;

    /**
     *
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column m_prj_ticket_hierarchy.parentId
     *
     * @mbg.generated Sat Apr 20 17:20:23 CDT 2019
     */
    @NotNull
    @Column("parentId")
    private Integer parentid;

    /**
     *
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column m_prj_ticket_hierarchy.parentType
     *
     * @mbg.generated Sat Apr 20 17:20:23 CDT 2019
     */
    @NotEmpty
    @Length(max=45, message="Field value is too long")
    @Column("parentType")
    private String parenttype;

    /**
     *
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column m_prj_ticket_hierarchy.ticketId
     *
     * @mbg.generated Sat Apr 20 17:20:23 CDT 2019
     */
    @NotNull
    @Column("ticketId")
    private Integer ticketid;

    /**
     *
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column m_prj_ticket_hierarchy.ticketType
     *
     * @mbg.generated Sat Apr 20 17:20:23 CDT 2019
     */
    @NotEmpty
    @Length(max=45, message="Field value is too long")
    @Column("ticketType")
    private String tickettype;

    /**
     *
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column m_prj_ticket_hierarchy.projectId
     *
     * @mbg.generated Sat Apr 20 17:20:23 CDT 2019
     */
    @NotNull
    @Column("projectId")
    private Integer projectid;

    private static final long serialVersionUID = 1;

    public final boolean equals(Object obj) {
        if (obj == null) { return false;}
        if (obj == this) { return true;}
        if (!obj.getClass().isAssignableFrom(getClass())) { return false;}
        TicketHierarchy item = (TicketHierarchy)obj;
        return new EqualsBuilder().append(id, item.id).build();
    }

    public final int hashCode() {
        return new HashCodeBuilder(507, 149).append(id).build();
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column m_prj_ticket_hierarchy.id
     *
     * @return the value of m_prj_ticket_hierarchy.id
     *
     * @mbg.generated Sat Apr 20 17:20:23 CDT 2019
     */
    public Integer getId() {
        return id;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table m_prj_ticket_hierarchy
     *
     * @mbg.generated Sat Apr 20 17:20:23 CDT 2019
     */
    public TicketHierarchy withId(Integer id) {
        this.setId(id);
        return this;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column m_prj_ticket_hierarchy.id
     *
     * @param id the value for m_prj_ticket_hierarchy.id
     *
     * @mbg.generated Sat Apr 20 17:20:23 CDT 2019
     */
    public void setId(Integer id) {
        this.id = id;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column m_prj_ticket_hierarchy.parentId
     *
     * @return the value of m_prj_ticket_hierarchy.parentId
     *
     * @mbg.generated Sat Apr 20 17:20:23 CDT 2019
     */
    public Integer getParentid() {
        return parentid;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table m_prj_ticket_hierarchy
     *
     * @mbg.generated Sat Apr 20 17:20:23 CDT 2019
     */
    public TicketHierarchy withParentid(Integer parentid) {
        this.setParentid(parentid);
        return this;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column m_prj_ticket_hierarchy.parentId
     *
     * @param parentid the value for m_prj_ticket_hierarchy.parentId
     *
     * @mbg.generated Sat Apr 20 17:20:23 CDT 2019
     */
    public void setParentid(Integer parentid) {
        this.parentid = parentid;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column m_prj_ticket_hierarchy.parentType
     *
     * @return the value of m_prj_ticket_hierarchy.parentType
     *
     * @mbg.generated Sat Apr 20 17:20:23 CDT 2019
     */
    public String getParenttype() {
        return parenttype;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table m_prj_ticket_hierarchy
     *
     * @mbg.generated Sat Apr 20 17:20:23 CDT 2019
     */
    public TicketHierarchy withParenttype(String parenttype) {
        this.setParenttype(parenttype);
        return this;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column m_prj_ticket_hierarchy.parentType
     *
     * @param parenttype the value for m_prj_ticket_hierarchy.parentType
     *
     * @mbg.generated Sat Apr 20 17:20:23 CDT 2019
     */
    public void setParenttype(String parenttype) {
        this.parenttype = parenttype;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column m_prj_ticket_hierarchy.ticketId
     *
     * @return the value of m_prj_ticket_hierarchy.ticketId
     *
     * @mbg.generated Sat Apr 20 17:20:23 CDT 2019
     */
    public Integer getTicketid() {
        return ticketid;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table m_prj_ticket_hierarchy
     *
     * @mbg.generated Sat Apr 20 17:20:23 CDT 2019
     */
    public TicketHierarchy withTicketid(Integer ticketid) {
        this.setTicketid(ticketid);
        return this;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column m_prj_ticket_hierarchy.ticketId
     *
     * @param ticketid the value for m_prj_ticket_hierarchy.ticketId
     *
     * @mbg.generated Sat Apr 20 17:20:23 CDT 2019
     */
    public void setTicketid(Integer ticketid) {
        this.ticketid = ticketid;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column m_prj_ticket_hierarchy.ticketType
     *
     * @return the value of m_prj_ticket_hierarchy.ticketType
     *
     * @mbg.generated Sat Apr 20 17:20:23 CDT 2019
     */
    public String getTickettype() {
        return tickettype;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table m_prj_ticket_hierarchy
     *
     * @mbg.generated Sat Apr 20 17:20:23 CDT 2019
     */
    public TicketHierarchy withTickettype(String tickettype) {
        this.setTickettype(tickettype);
        return this;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column m_prj_ticket_hierarchy.ticketType
     *
     * @param tickettype the value for m_prj_ticket_hierarchy.ticketType
     *
     * @mbg.generated Sat Apr 20 17:20:23 CDT 2019
     */
    public void setTickettype(String tickettype) {
        this.tickettype = tickettype;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column m_prj_ticket_hierarchy.projectId
     *
     * @return the value of m_prj_ticket_hierarchy.projectId
     *
     * @mbg.generated Sat Apr 20 17:20:23 CDT 2019
     */
    public Integer getProjectid() {
        return projectid;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table m_prj_ticket_hierarchy
     *
     * @mbg.generated Sat Apr 20 17:20:23 CDT 2019
     */
    public TicketHierarchy withProjectid(Integer projectid) {
        this.setProjectid(projectid);
        return this;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column m_prj_ticket_hierarchy.projectId
     *
     * @param projectid the value for m_prj_ticket_hierarchy.projectId
     *
     * @mbg.generated Sat Apr 20 17:20:23 CDT 2019
     */
    public void setProjectid(Integer projectid) {
        this.projectid = projectid;
    }

    public enum Field {
        id,
        parentid,
        parenttype,
        ticketid,
        tickettype,
        projectid;

        public boolean equalTo(Object value) {
            return name().equals(value);
        }
    }
}