
<template>
  <Icon :iconName="'briefcase-dollar'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'BriefcaseDollarIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'briefcase-dollar'
    },
    ...Icon.props
  },
  computed: {
    props() {
      return { ...this.$props };
    }
  }
};
</script>
