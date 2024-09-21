
<template>
  <Icon :iconName="'presentation-04'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Presentation04Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'presentation-04'
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
