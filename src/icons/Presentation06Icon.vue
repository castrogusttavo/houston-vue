
<template>
  <Icon :iconName="'presentation-06'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Presentation06Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'presentation-06'
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
