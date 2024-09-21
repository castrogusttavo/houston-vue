
<template>
  <Icon :iconName="'laptop-issue'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'LaptopIssueIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'laptop-issue'
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
