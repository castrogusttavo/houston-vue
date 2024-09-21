
<template>
  <Icon :iconName="'mouse-09'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Mouse09Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'mouse-09'
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
