
<template>
  <Icon :iconName="'note-04'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Note04Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'note-04'
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
