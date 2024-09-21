
<template>
  <Icon :iconName="'shocked'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'ShockedIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'shocked'
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
