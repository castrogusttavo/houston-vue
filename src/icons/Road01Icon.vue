
<template>
  <Icon :iconName="'road-01'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Road01Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'road-01'
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
