
<template>
  <Icon :iconName="'re'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'ReIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 're'
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
