
<template>
  <Icon :iconName="'checkmark-badge-03'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'CheckmarkBadge03Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'checkmark-badge-03'
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
