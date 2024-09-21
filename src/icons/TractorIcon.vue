
<template>
  <Icon :iconName="'tractor'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'TractorIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'tractor'
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
