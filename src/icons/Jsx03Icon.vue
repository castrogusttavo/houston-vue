
<template>
  <Icon :iconName="'jsx-03'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Jsx03Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'jsx-03'
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
