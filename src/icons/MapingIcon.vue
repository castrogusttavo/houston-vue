
<template>
  <Icon :iconName="'maping'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'MapingIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'maping'
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
