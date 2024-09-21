
<template>
  <Icon :iconName="'t-shirt'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'TShirtIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 't-shirt'
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
