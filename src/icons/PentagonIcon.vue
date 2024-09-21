
<template>
  <Icon :iconName="'pentagon'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'PentagonIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'pentagon'
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
