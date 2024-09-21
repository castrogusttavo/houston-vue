
<template>
  <Icon :iconName="'vine'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'VineIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'vine'
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
