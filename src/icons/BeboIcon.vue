
<template>
  <Icon :iconName="'bebo'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'BeboIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'bebo'
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
