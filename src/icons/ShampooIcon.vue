
<template>
  <Icon :iconName="'shampoo'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'ShampooIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'shampoo'
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
