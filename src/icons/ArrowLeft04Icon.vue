
<template>
  <Icon :iconName="'arrow-left-04'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'ArrowLeft04Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'arrow-left-04'
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
