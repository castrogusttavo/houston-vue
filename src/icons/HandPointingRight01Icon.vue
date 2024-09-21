
<template>
  <Icon :iconName="'hand-pointing-right-01'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'HandPointingRight01Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'hand-pointing-right-01'
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
