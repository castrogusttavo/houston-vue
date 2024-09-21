
<template>
  <Icon :iconName="'pie'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'PieIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'pie'
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
