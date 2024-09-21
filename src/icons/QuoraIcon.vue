
<template>
  <Icon :iconName="'quora'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'QuoraIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'quora'
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
