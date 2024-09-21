
<template>
  <Icon :iconName="'molecules'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'MoleculesIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'molecules'
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
