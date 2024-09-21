
<template>
  <Icon :iconName="'mouse-19'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Mouse19Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'mouse-19'
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
