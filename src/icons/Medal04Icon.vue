
<template>
  <Icon :iconName="'medal-04'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Medal04Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'medal-04'
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
