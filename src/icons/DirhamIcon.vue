
<template>
  <Icon :iconName="'dirham'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'DirhamIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'dirham'
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
