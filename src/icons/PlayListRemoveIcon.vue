
<template>
  <Icon :iconName="'play-list-remove'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'PlayListRemoveIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'play-list-remove'
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
