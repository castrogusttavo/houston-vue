
<template>
  <Icon :iconName="'projector-01'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Projector01Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'projector-01'
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
