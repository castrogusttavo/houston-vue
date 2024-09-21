
<template>
  <Icon :iconName="'mushroom-01'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Mushroom01Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'mushroom-01'
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
