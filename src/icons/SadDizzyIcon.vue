
<template>
  <Icon :iconName="'sad-dizzy'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'SadDizzyIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'sad-dizzy'
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
