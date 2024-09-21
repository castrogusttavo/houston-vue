
<template>
  <Icon :iconName="'pavilon'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'PavilonIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'pavilon'
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
