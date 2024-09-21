
<template>
  <Icon :iconName="'bbq-grill'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'BbqGrillIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'bbq-grill'
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
