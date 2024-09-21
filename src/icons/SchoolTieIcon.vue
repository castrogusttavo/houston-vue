
<template>
  <Icon :iconName="'school-tie'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'SchoolTieIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'school-tie'
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
