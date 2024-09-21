
<template>
  <Icon :iconName="'recycle-01'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Recycle01Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'recycle-01'
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
