
<template>
  <Icon :iconName="'distribute-vertical-bottom'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'DistributeVerticalBottomIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'distribute-vertical-bottom'
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
