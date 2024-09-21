
<template>
  <Icon :iconName="'knife-01'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Knife01Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'knife-01'
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
