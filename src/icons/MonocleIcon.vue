
<template>
  <Icon :iconName="'monocle'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'MonocleIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'monocle'
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
