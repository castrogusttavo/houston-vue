
<template>
  <Icon :iconName="'grapes'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'GrapesIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'grapes'
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
