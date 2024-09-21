
<template>
  <Icon :iconName="'global'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'GlobalIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'global'
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
