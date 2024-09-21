
<template>
  <Icon :iconName="'medal-05'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Medal05Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'medal-05'
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
